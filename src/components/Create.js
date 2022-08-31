import React from "react";

function Create(props) {
  return (
    <>
      <h2>Create</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          const writer = localStorage.getItem("Name");
          let date = new Date();
          date = String(
            date.getFullYear() +
              "-" +
              (date.getMonth() + 1) +
              "-" +
              date.getDate()
          );
          props.onCreate(title, body, writer, date);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="추가"></input>
        </p>
      </form>
    </>
  );
}

export default Create;
