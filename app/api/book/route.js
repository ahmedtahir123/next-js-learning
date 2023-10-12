export async function GET(req, res) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 20 },
    });
    const product = await responce.json();
  
    return Response.json({ data: product, dateTime: new Date() });
  }