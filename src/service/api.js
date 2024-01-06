import { apis } from "service";

const COMMON_URL = `https://api.spotify.com/v1/`;

const API_URLS = {
  GET_SPOTIFY_RECOMMENDATIONS: `${COMMON_URL}recommendations`,
};

export const getSpotifyRecommendations = (payload) =>
  apis.get(API_URLS.GET_SPOTIFY_RECOMMENDATIONS, {
    ...payload,
    params: {
      seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
      seed_genres: "classical%2Ccountry",
      seed_tracks: "0c6xIDDpzE81m2q797ordA",
      ...payload?.params,
    },
  });
