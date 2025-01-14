import { Routes, Route } from "react-router-dom";
import App from "../V0/App";
import NewForm from "../NewForm";
import FillForm from "../FillForm";
import ViewResponses from "../ViewResponses";
import MyForms from "../MyForms";
import { GlobalForms } from "../GlobalForms";
import CreateForm from "../../containers/CreateForm";
import { DraftsController } from "../MyForms/DraftsController";

function Routing() {
  return (
    <Routes>
      <Route path="forms/create" element={<CreateForm />} />
      <Route path="/" element={<App />}>
        <Route path="global" element={<GlobalForms />} />
        <Route path="myForms" element={<MyForms />} />
        <Route path="forms/new" element={<NewForm />} />
        <Route path="forms/fill" element={<FillForm />} />
        <Route path="forms/:npub" element={<FillForm />} />
        <Route path="forms/:nsec/responses" element={<ViewResponses />} />
        <Route path="drafts/:encodedForm" element={<DraftsController />} />
        <Route path="forms/responses" element={<ViewResponses />} />
        <Route path="*" element={<NewForm />} />
        <Route index element={<MyForms />} />
      </Route>
    </Routes>
  );
}

export default Routing;