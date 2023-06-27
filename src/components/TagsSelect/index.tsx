import { useContext } from 'react'
import CreatableSelect from 'react-select/creatable'
import Select from 'react-select'
import { ThemeContext } from '../../context/ThemeContext';
import { NotesContext, NotesContextType } from '../../context/NotesContext';
import { MultiValue } from 'react-select';
import { Tag } from '../../App';

type TagsSelectProps = {
  isCreatable?: boolean
  selectedTags: Tag[]
  setSelectedTags: (tags: Tag[]) => void
}

export const TagsSelect = ({ isCreatable = false, selectedTags, setSelectedTags }: TagsSelectProps) => {
  const { theme } = useContext(ThemeContext);
  const {
    tags: availableTags,
    handleTagCreate: onTagCreate
  } = useContext(NotesContext) as NotesContextType;

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

  return isCreatable ? (
    <CreatableSelect
      isMulti
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
      aria-label='select tags'
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
        }),
        input: styles => ({
          ...styles,
          color: theme.fontColor
        }),
        menu: styles => ({
          ...styles,
          backgroundColor: theme.background
        })
      }}
    />
  ) : (
    <Select
      isMulti
      value={selectedTags.map(tag => ({
        label: tag.label,
        value: tag.id
      }))}
      options={availableTags.map(tag => ({
        label: tag.label,
        value: tag.id
      }))}
      onChange={handleTagsSelect}
      id='tags'
      aria-label='select-tags'
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
          color: '#fff',
        }),
        multiValueRemove: styles => ({
          ...styles,
          ':hover': {
            backgroundColor: '#90a0ff',
            cursor: 'pointer'
          }
        }),
        input: styles => ({
          ...styles,
          color: theme.fontColor
        }),
        menu: styles => ({
          ...styles,
          backgroundColor: theme.background
        })
      }}
    />
  )
}