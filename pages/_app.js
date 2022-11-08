import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-neutral-900 font-inter text-zinc-300">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
