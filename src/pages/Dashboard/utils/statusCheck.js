export const checkStatus = async (resources) => {
  const status = await Promise.all(
    resources.map(async ({ url }) => {
      try {
        const proxyUrl = `${
          import.meta.env.VITE_APP_API_URL
        }/proxy?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        return response.ok ? "online" : "offline";
      } catch (error) {
        return "offline";
      }
    })
  );
  return Object.fromEntries(resources.map(({ name }, i) => [name, status[i]]));
};
