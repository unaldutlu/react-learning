import { useState } from "react";

function InputExample() {
  //   const [name, setName] = useState("Unal");
  //   const [surname, setSurname] = useState("Dutlu");
  const [form, setForm] = useState({ name: "", surname: "" });

  //   const onChangeName = (e) => setForm(e.target.value);
  //   const onChangeSurname = (e) => setSurname(e.target.value);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <b>Name</b>
      <br />
      {/* <input name='' value={name} onChange={(e) => setName(e.target.value)} /> */}
      {/* <input name='' value={name} onChange={onChangeName} /> */}
      <input name='name' value={form.name} onChange={onChangeInput} />
      <br />
      <br />
      <b>Surname</b>
      <br />
      {/* <input name='' value={surname} onChange={(e) => setSurname(e.target.value)} */}
      {/* <input name='' value={surname} onChange={onChangeSurname} /> */}
      <input name='surname' value={form.surname} onChange={onChangeInput} />
      <br />
      <h1>{`=> ${form.name} ${form.surname}`}</h1>
    </div>
  );
}

export default InputExample;
