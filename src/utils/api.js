export const request = async (options) => {
  return await fetch("/.netlify/functions/workspace", {
    method: "POST",
    body: JSON.stringify(options),
  }).then((res) => res.json());
};
