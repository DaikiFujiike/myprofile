export default async function Detail({params}:{params:Promise<{id:string}>}){const {id}=await params;return <main className='p-8'><div className='card'>セッション詳細: {id}</div></main>}
