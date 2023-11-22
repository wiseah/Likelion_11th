import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

function App() {
  const [diaryList, setDiaryList] = useState(null);
  const [selectedMood, setSelectedMood] = useState("");

  const fetchDiary = async () => {
    const res = await axios.get("http://localhost:4000/api/diary");
    setDiaryList(res.data);
  };

  useEffect(() => {
    fetchDiary();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const mood = selectedMood;
    // 현재 날짜를 얻어옴
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
    axios.post("http://localhost:4000/api/diary", {
      title,
      content,
      mood,
      date: formattedDate,
    });
    fetchDiary();
  };

  const onMoodCheckboxChange = (e) => {
    const selectedMood = e.target.value;
    setSelectedMood(selectedMood);
  };

  return (
    <>
      <Container>
        <Title>일기를 써봅시다!</Title>
        <Form onSubmit={onSubmitHandler}>
          {/* 기분 체크박스 추가 */}
          <MoodCheckboxes>
            {["신남", "좋음", "보통", "나쁨", "화남"].map((mood) => (
              <MoodCheckbox
                key={mood}
                mood={mood}
                checked={selectedMood === mood}
                onChange={onMoodCheckboxChange}
              />
            ))}
          </MoodCheckboxes>
          <Input name="title" placeholder="제목" />
          <TextArea name="content" placeholder="내용" />
          <SubmitButton type="submit">추가</SubmitButton>
        </Form>
        {diaryList && (
          <DiaryList>
            {diaryList.map((diary) => (
              <DiaryItem key={diary.id}>
                <div>
                  <DiaryTitle>제목: {diary.title}</DiaryTitle>
                  <DiaryDate>날짜: {diary.date}</DiaryDate>
                  <DiaryMood>오늘의 기분: {diary.mood}</DiaryMood>
                  <DiaryContent>{diary.content}</DiaryContent>
                </div>
              </DiaryItem>
            ))}
          </DiaryList>
        )}
        <Alert>그만 줄여요!</Alert>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  @media only screen and (max-width: 350px) {
    color: pink;
  }
`;

const Form = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  width: 50%;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const DiaryList = styled.ul`
  list-style: none;
  width: 60%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;

const DiaryTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DiaryItem = styled.li`
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DiaryDate = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: skyblue;
`;

const DiaryMood = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: pink;
`;

const DiaryContent = styled.p`
  font-size: 16px;
  color: #555;
`;

const Alert = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: red;
  display: none;
  @media only screen and (max-width: 350px) {
    display: flex;
  }
`;

// 기분 체크박스 스타일 정의
const MoodCheckboxLabel = styled.label`
  margin-right: 10px;
`;

// 기분 체크박스를 감싸는 div 추가
const MoodCheckboxes = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

// 기분 체크박스 컴포넌트
const MoodCheckbox = ({ mood, checked, onChange }) => (
  <MoodCheckboxLabel>
    <input
      type="checkbox"
      name="mood"
      value={mood}
      checked={checked}
      onChange={onChange}
    />
    {mood}
  </MoodCheckboxLabel>
);
