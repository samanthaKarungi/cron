export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const secretToken = searchParams.get('secret');

    if (secretToken !== process.env.CRON_SECRET_TOKEN) {
      console.log("Unauthenticated user");
      return new Response(null, { status: 403, statusText: 'Unauthorized' });
    }
    console.log("Job Successful!");
    return new Response(null, {status: 200, statusText: `Success`});
  } catch (error) {
    console.log(error);
    return new Response(null, {status: 400, statusText: `Error`});
  }
}