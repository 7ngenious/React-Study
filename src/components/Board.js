import { useState, useEffect } from "react";
import Create from "./Create";
import "./board.css";
import Post from "./Post";
import Search from "./Search";

function Header(props) {
  return (
    <>
      <a
        href="/"
        onClick={e => {
          e.preventDefault();
          props.onChangeMode();
        }}
      >
        {props.title}
      </a>
    </>
  );
}
function Nav(props) {
  const list = [];
  for (let i = 0; i < props.renderTopics.length; i++) {
    let t = props.renderTopics[i];
    list.push(
      <tr key={t.id}>
        <td>
          <a
            id={t.id}
            href={"/read/" + t.id}
            onClick={e => {
              e.preventDefault();
              props.onChangeMode(Number(e.target.id));
            }}
          >
            {i + 1}
          </a>
        </td>
        <td>
          <a
            id={t.id}
            href={"/read/" + t.id}
            onClick={e => {
              e.preventDefault();
              props.onChangeMode(Number(e.target.id));
            }}
          >
            {t.title}
          </a>
        </td>
        <td>{t.writer}</td>
        <td>{t.date}</td>
      </tr>
    );
  }
  return <>{list}</>;
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <>
      <h2>Update</h2>
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
          props.onUpdate(title, body, writer, date);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={event => {
              setBody(event.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="수정완료"></input>
        </p>
      </form>
    </>
  );
}
function Board() {
  const log = localStorage.getItem("InputId");
  const name = localStorage.getItem("Name");
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(6);
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "html",
      body: "html is ...",
      writer: "정재경",
      date: "2021-8-05",
    },
    {
      id: 2,
      title: "css",
      body: "css is ...",
      writer: "정재경",
      date: "2021-8-05",
    },
    {
      id: 3,
      title: "javascript",
      body: "javascript is ...",
      writer: "정재경",
      date: "2021-8-05",
    },
    {
      id: 4,
      title: "안녕",
      body: "안녕하세요...",
      writer: "정재경",
      date: "2021-8-05",
    },
    {
      id: 5,
      title: "안녕하세요",
      body: "안녕하세요ㅛㅛ ...",
      writer: "정재경",
      date: "2021-8-05",
    },
  ]);
  const [renderTopics, setRenderTopics] = useState(topics);
  let content = null;
  let contextControl = null;
  if (mode === "WELCOME") {
    content = <Post title="Hello" body=""></Post>;
  } else if (mode === "READ") {
    let title,
      body,
      writer,
      date = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
        writer = topics[i].writer;
        date = topics[i].date;
      }
    }
    content = (
      <Post title={title} body={body} writer={writer} date={date}></Post>
    );
    contextControl = (
      <>
        <button
          link={"/update/" + id}
          onClick={e => {
            e.preventDefault();
            setMode("UPDATE");
          }}
        >
          수정
        </button>
        <button
          onClick={() => {
            const newTopics = [];
            for (let i = 0; i < topics.length; i++) {
              if (topics[i].id !== id) {
                newTopics.push(topics[i]);
              }
            }
            setTopics(newTopics);
            setRenderTopics(newTopics);
            setMode("WELCOME");
          }}
        >
          삭제
        </button>
      </>
    );
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body, _writer, _date) => {
          const newTopic = {
            id: nextId,
            title: _title,
            body: _body,
            writer: _writer,
            date: _date,
          };
          const newTopics = [...topics];
          newTopics.push(newTopic);
          setTopics(newTopics);
          setRenderTopics(newTopics);
          setMode("READ");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode === "UPDATE") {
    let title,
      body,
      writer,
      date = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        writer={writer}
        date={date}
        onUpdate={(title, body, writer, date) => {
          console.log(title, body);
          const newTopics = [...topics];
          const updatedTopic = {
            id: id,
            title: title,
            body: body,
            writer: writer,
            date: date,
          };
          for (let i = 0; i < newTopics.length; i++) {
            if (newTopics[i].id === id) {
              newTopics[i] = updatedTopic;
              break;
            }
          }
          setTopics(newTopics);
          setRenderTopics(newTopics);
          setMode("READ");
        }}
      ></Update>
    );
  }
  return (
    <div className="boardWrap">
      <Header
        title="게시판"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Search
        onChangeMode={() => {
          setMode("WELCOME");
        }}
        renderTopics={renderTopics}
        setRenderTopics={setRenderTopics}
        topics={topics}
      ></Search>
      <div className="tableWrap">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th className="th-title">제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            <Nav
              className="boardForm"
              renderTopics={renderTopics}
              onChangeMode={_id => {
                setMode("READ");
                setId(_id);
              }}
            ></Nav>
          </tbody>
        </table>
      </div>
      <div className="postWrap">
        {content}
        {log ? (
          <div className="buttonList">
            <button
              link="/create"
              onClick={e => {
                e.preventDefault();
                setMode("CREATE");
              }}
            >
              글쓰기
            </button>
            {contextControl}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Board;
