import { Layout, Modal, message } from 'antd';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';




const ClientLayout = ({ children, head, topheader=true, footer= false }) => {
    return (
        <Layout style={{ backgroundColor: "transparent", scrollBehavior: "smooth", position:'relative' }}>
         
            {/* <ClientHeader /> */}
            {topheader && <ClientHeader />}
            {children}
          {footer && <ClientFooter />}
        </Layout>
    );
}
export default ClientLayout