import { useRouter } from 'next/router';

const ClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>A Specific Project of a Client</h1>
    </div>
  );
};

export default ClientProjectPage;
