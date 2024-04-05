export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ url, fetch }) {
  return {
    someExampleProp: {
      test: "Test",
    },
  };
}
