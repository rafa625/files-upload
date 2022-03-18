
import Uploady, { useFileInput, useUploady, useUploadyContext, useItemFinishListener } from "@rpldy/uploady";
import { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { RootState } from "../../app/store";
import { prospectListAdded } from "../prospect/ProspectSlice";
import { Button, Div } from "./styles";


const UploadForm = () => {
  const inputRef = useRef();
  useFileInput(inputRef);

  const dispatch = useAppDispatch()
  const prospects = useSelector((state: RootState) => state.prospect)

  const [prospectList, setProspectList] = useState([])
  const [fields, setFields] = useState({});

  const uploadyContext = useUploadyContext();
  const uploady = useUploady()

  const onClick = () => {
    uploady.showFileUpload()
  }

  const onSubmit = useCallback(() => {
    uploadyContext.processPending()
  }, [fields, uploadyContext]);

  const onFieldChange = useCallback(
    (e) => {
      var file = e.target.files[0]
      setFields(file)
    },
    [fields, setFields]
  );

  useItemFinishListener(({ uploadResponse }) => {
    dispatch(prospectListAdded(uploadResponse.data))
  })

  return (
    <Div>
      <input type="file" name="testFile" datatype={fields.toString()} style={{ display: "none" }} ref={inputRef} onChange={onFieldChange} />
      <Button onClick={onClick}>Carregar Arquivo</Button>
    </Div>)

};



const UploadFile = () => {
  return (<Uploady
    customInput
    destination={{ url: "http://localhost:4000/api/v1/prospect/csv" }}

  >
    <UploadForm />
  </Uploady>)
};

export default UploadFile