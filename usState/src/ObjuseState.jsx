import { useState } from "react";
const Objusestate = () => {
  const [module, setModule] = useState({
    name: "Nishan",
    email: "infonkumarrai323@gmail.com",
    phone_number: "+977 9826279512",
    father_name: "Maite Rai",
    isActive: true,
  });
  const [edit, setEdit] = useState("");
  const editText = () => {
    setModule((prev) => {
      return { ...prev, name: edit };
    });
    setEdit("");
  };
  return (
    <>
      {module.name}{" "}
      <input
        type="text"
        value={edit}
        placeholder="Enter Your Name"
        onChange={(e) => setEdit(e.target.value)}
      ></input>
      <button onClick={editText}>Edit</button>
    </>
  );
};
export default Objusestate;
