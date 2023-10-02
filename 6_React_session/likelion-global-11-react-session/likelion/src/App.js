import { useState, useEffect } from "react";
import Item from "./Items";

function App() {
  const [changed, setChanged] = useState(null);
  const [checkedItems, setCheckedItems] = useState(0); // 체크된 아이템 개수를 저장할 상태 변수

  // 체크된 아이템 개수가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    setCheckedItems(checkedItems);
  }, [checkedItems]);

  // 아이템 리스트 컴포넌트에서 체크 상태를 감지하고 체크된 아이템 개수 업데이트
  const handleItemCheck = (isChecked) => {
    if (isChecked) {
      setCheckedItems((prev) => prev + 1); // 체크된 아이템 개수 증가
    } else {
      setCheckedItems((prev) => prev - 1); // 체크된 아이템 개수 감소
    }
  };

  return (
    <>
      <article>
        <section className={"changed"}>
          <h1>방금 변경된 아이템</h1>
          <div>{changed}</div>
        </section>
        <section className={"changed"}>
          <h1>방금 변경된 아이템</h1>
          <div>{checkedItems}개</div>
        </section>
        {/* 아이템 리스트 */}
        <section className={"list"}>
          <h1>아이템 리스트</h1>
          <ol>
            {["A", "B", "C", "D", "E", "F", "G", "H"].map((item) => {
              return (
                <Item
                  key={item}
                  item={item}
                  setChanged={setChanged}
                  onItemCheck={handleItemCheck}
                />
              );
            })}
          </ol>
        </section>
      </article>
      <style jsx>{`
        section.changed {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        section.changed > div {
          color: purple;
          font-weight: 800;
        }
        article {
          height: 100vh;
          width: 100vw;
          max-width: 30rem;
          margin: 0 auto;
          padding: 1.5rem;
          background: #ffc0cb21;
        }

        article h1 {
          padding: 0 0.5rem;
        }
        section.changed {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        section.changed > div {
          color: purple;
          font-weight: 800;
        }
        section.list {
          display: flex;
          flex-direction: column;
        }
        section.list ol {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-radius: 0.5rem;
          background-color: white;
          box-shadow: 0px 2px 10px 0px rgb(182 158 198 / 15%);
          height: 2rem;
        }
        li > span {
          font-size: 1.5rem;
          font-weight: 500;
        }
        li > div {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        li > div > div:first-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 0.5rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 5px;
          background: #efeded;
          font-weight: 700;
        }
        li > div > div.button-list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
        }
        li > div > div.button-list button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.7rem;
          height: 1.7rem;
          cursor: pointer;
          border-radius: 5px;
          border: none;
          background: #f6ecff;
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}

export default App;
