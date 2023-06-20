import { useState, useEffect, useContext } from 'react';
import { Button, DisabledButton } from "../../styles"
import { InputGroup, RequiredMessage } from "./styles"
import { useNavigate } from 'react-router-dom';
import { Note, Tag } from '../../App'
import { NotesContext, NotesContextType } from '../../context/NotesContext';
import { TagsSelect } from '../TagsSelect';

type NoteFormProps = {
  currentData?: Note
}

export const NoteForm = ({ currentData }: NoteFormProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const {
    handleNewNote: onSubmit,
    handleNoteEdit
  } = useContext(NotesContext) as NotesContextType;
  
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const [isValueEmpty, setIsValueEmpty] = useState<boolean>(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (currentData) {
      setTitleValue(currentData.title);
      setContentValue(currentData.content);
      setSelectedTags(currentData.tags);
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
      const newNote = {
        title: titleValue,
        content: contentValue,
        tags: selectedTags,
        updatedAt: new Date()
      };

      currentData ? handleNoteEdit(currentData.id, newNote) : onSubmit(newNote);
      navigate('/');
    } else {
      setIsValueEmpty(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <label>Tags</label>
        <TagsSelect
          isCreatable
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </InputGroup>
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
      {currentData ? (
        <>
          {
            currentData.title === titleValue &&
            currentData.content === contentValue &&
            currentData.tags === selectedTags ? (
            <DisabledButton type='submit' disabled>Update</DisabledButton>
          ) : (
            <Button type='submit'>Update</Button>
          )}
        </>
      ) : (
        <Button type='submit'>Add</Button>
      )}
    </form>
  )
}
