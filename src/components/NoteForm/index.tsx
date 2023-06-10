import { useState, useEffect } from 'react';
import { NewNoteProps } from "../../pages/NewNote"
import { Button } from "../../styles"
import { InputGroup, RequiredMessage } from "./styles"
import { useNavigate } from 'react-router-dom';

export const NoteForm = ({ onSubmit, currentData }: NewNoteProps) => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const [isValueEmpty, setIsValueEmpty] = useState<boolean>(false);
  const navigate = useNavigate();
  console.log(currentData);

  useEffect(() => {
    if (currentData) {
      setTitleValue(currentData.title);
      setContentValue(currentData.content);
    }
  }, [])

  const removeWarning = (value: string) => {
    if (value.trim() && isValueEmpty) {
      setIsValueEmpty(false);
    }
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
    removeWarning(e.target.value);
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value);
    removeWarning(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (titleValue.trim() && contentValue.trim()) {
      onSubmit({
        title: titleValue,
        content: contentValue,
        tags: [],
        updatedAt: new Date()
      });
      navigate('/');
    } else {
      setIsValueEmpty(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup $redShadow={isValueEmpty}>
        <label htmlFor="title">
          Title
          {isValueEmpty && <RequiredMessage>required</RequiredMessage>}
        </label>
        <input
          type="text"
          id="title"
          value={titleValue}
          onChange={handleTitleChange}
        />
      </InputGroup>
      <InputGroup $redShadow={isValueEmpty}>
        <label htmlFor="content">
          Content
          {isValueEmpty && <RequiredMessage>required</RequiredMessage>}
        </label>
        <textarea
          id="content"
          value={contentValue}
          onChange={handleContentChange}
        ></textarea>
      </InputGroup>
      <Button type="submit">
        {currentData ? "Update" : "Add"}
      </Button>
    </form>
  )
}
