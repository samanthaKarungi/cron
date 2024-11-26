export async function GET() {
  try {
    console.log("api called!");
    return new Response(null, {status: 200, statusText: `API called successfully!`});
  } catch (error) {
    return new Response(null, {status: 400, statusText: `Bad Request: ${error}`});
  }
}