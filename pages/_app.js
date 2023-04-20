import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-inter text-zinc-300">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
