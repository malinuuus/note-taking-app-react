import { useState, useEffect, useContext } from 'react';
import { Button, DisabledButton } from "../../styles"
import { InputGroup, RequiredMessage } from "./styles"
import { useNavigate } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable'
import { Note, Tag } from '../../App';
import { MultiValue } from 'react-select';
import { NotesContext, NotesContextType } from '../../context/NotesContext';
import { ThemeContext } from '../../context/ThemeContext';

type NoteFormProps = {
  currentData?: Note
}

export const NoteForm = ({ currentData }: NoteFormProps) => {
  const { theme } = useContext(ThemeContext);
  const {
    tags: availableTags,
    handleTagCreate: onTagCreate,
    handleNewNote: onSubmit,
    handleNoteEdit
  } = useContext(NotesContext) as NotesContextType;
  
  const [titleValue, setTitleValue] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');
  const [isValueEmpty, setIsValueEmpty] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
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

  const handleTagsSelect = (tags: MultiValue<{label: string, value: string}>) => {
    setSelectedTags(tags.map(tag => ({
      id: tag.value,
      label: tag.label
    })))
  }

  const handleTagCreate = (label: string) => {
    const newTag: Tag = {
      id: new Date().valueOf().toString(),
      label: label
    }

    onTagCreate(newTag);
    setSelectedTags([...selectedTags, newTag]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <label>Tags</label>
        <CreatableSelect
          isMulti
          classNamePrefix={'Select'}
          value={selectedTags.map(tag => ({
            label: tag.label,
            value: tag.id
          }))}
          options={availableTags.map(tag => ({
            label: tag.label,
            value: tag.id
          }))}
          onChange={handleTagsSelect}
          onCreateOption={handleTagCreate}
          id='tags'
          styles={{
            option: styles => ({
              ...styles,
              backgroundColor: theme.elements,
              '&:hover': {
                backgroundColor: theme.onHover
              }
            }),
            control: styles => ({
              ...styles,
              borderColor: '#000',
              borderRadius: 0,
              backgroundColor: theme.elements,
              '&:hover': {
                borderColor: '#000'
              }
            }),
            multiValue: styles => ({
              ...styles,
              backgroundColor: '#2f4eff'
            }),
            multiValueLabel: styles => ({
              ...styles,
              color: '#fff'
            }),
            multiValueRemove: styles => ({
              ...styles,
              ':hover': {
                backgroundColor: '#90a0ff',
                cursor: 'pointer'
              }
            })
          }}
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
