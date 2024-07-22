import Layout from "@/components/common/layout";
import "@/styles/globals.css";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NotificationContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
