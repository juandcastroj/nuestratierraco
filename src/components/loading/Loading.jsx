export default function Loading() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-4xl">⏳</p>
          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-blueText sm:text-3xl">
            Cargando...
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Preparando tu info de usuario...
          </p>
    
        </div>
      </main>
    </>
  )
}
