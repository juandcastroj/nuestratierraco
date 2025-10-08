export default function VideoSection() {
    return (
        <section className="flex justify-center items-center bg-transparent py-10">
            <div className="w-full max-w-3xl px-4">
                <video
                    className="w-full rounded-2xl shadow-lg"
                    controls
                    autoPlay
                    loop
                    muted
                >
                    <source src="/videos/nuestro-ranchito.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
            </div>
        </section>
    );
}
