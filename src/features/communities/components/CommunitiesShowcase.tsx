import { useEffect, useReducer } from "react";
import SwiperCard from "./SwiperCard";
import type { CommunityData, State } from "../../../Components/type";
import { LoadingSpinner } from "../../../Components/common";
import { CommunitiesGrid } from "./CommunitiesGrid";
// Constants
const API_ENDPOINT = "/api";

const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
} as const;

type Action =
  | { type: typeof ACTIONS.FETCH_START }
  | { type: typeof ACTIONS.FETCH_SUCCESS; payload: CommunityData[] }
  | { type: typeof ACTIONS.FETCH_ERROR; payload: string };

const initialState: State = {
  communities: [],
  loading: true,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        communities: action.payload,
        error: null,
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

/**
 * CommunitiesShowcase - Component that displays a collection of communities
 * Fetches data from API and displays either loading state, error, or community content
 */
export default function CommunitiesShowcase() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { communities, loading, error } = state;

  useEffect(() => {
    const fetchCommunities = async () => {
      dispatch({ type: ACTIONS.FETCH_START });

      try {
        const response = await fetch(API_ENDPOINT, {
          headers: {
            Authorization: `Basic ${import.meta.env.VITE_AUTH_TOKEN}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch communities: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.data) {
          throw new Error("Invalid response format");
        }

        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data.data });
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An error occurred";
        console.error("Error fetching communities:", errorMessage);
        dispatch({
          type: ACTIONS.FETCH_ERROR,
          payload: errorMessage,
        });
      }
    };

    fetchCommunities();
  }, []);

  // Early returns for loading and error states
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500" role="alert">
        <h2 className="text-lg font-semibold mb-2">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  // Only render when communities are available
  return (
    <main>
      {communities.length > 0 ? (
        <>
          <CommunitiesGrid communities={communities} />
          <SwiperCard communities={communities} />
        </>
      ) : (
        <div className="text-center py-10">No communities found</div>
      )}
    </main>
  );
}
