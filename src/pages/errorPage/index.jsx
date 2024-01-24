import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-12 p-8 text-2xl">
      <h1>Oops!</h1>
      <p className="text-center">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
