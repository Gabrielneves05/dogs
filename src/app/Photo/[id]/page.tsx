export default async function PhotoId({ params}: { params: { id: number } }) {
    return (
        <main>
            <h1>ID da foto: {params.id}</h1>
        </main>
    );
}