import { Layout, Divider } from "antd";
import BasicMenu from "../BasicMenu";
import InputsMenu from "../InputsMenu";
import PreBuiltMenu from "../PreBuiltMenu";
import StyledWrapper from "./style";

function Sidebar() {
  return (
    <StyledWrapper>
      <Layout.Sider
        className="create-sidebar"
        width={252}
        style={{
          marginTop: "1px",
        }}
      >
        <BasicMenu />
        <Divider className="menu-divider" />
        <InputsMenu />
        <Divider className="menu-divider" />
        <PreBuiltMenu />
      </Layout.Sider>
    </StyledWrapper>
  );
}

export default Sidebar;
