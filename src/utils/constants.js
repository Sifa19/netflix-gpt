const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const TMDB_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDNkZTU0NzczNDgyZDI0MjdiYTBiYmYxNTkyMDUzZSIsIm5iZiI6MTc1NDc2MjA2Ny41NTEsInN1YiI6IjY4OTc4YjUzMDc0NTZlODI0ZThkYTJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0D_e8LMcojIpLBUDA6oFODRfOzSH_2mqI-s3Zzwd8Qo";

const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer   eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDNkZTU0NzczNDgyZDI0MjdiYTBiYmYxNTkyMDUzZSIsIm5iZiI6MTc1NDc2MjA2Ny41NTEsInN1YiI6IjY4OTc4YjUzMDc0NTZlODI0ZThkYTJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0D_e8LMcojIpLBUDA6oFODRfOzSH_2mqI-s3Zzwd8Qo",
  },
};

export { LOGO_URL, TMDB_API, TMDB_API_OPTIONS };
