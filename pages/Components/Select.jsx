import * as React from 'react'

import { Input, StyledInput } from 'baseui/input'
import { VARIANT as TAG_VARIANT, Tag } from 'baseui/tag'

import { useStyletron } from 'baseui'

const InputReplacement = React.forwardRef(
  ({ tags, removeTag, ...restProps }, ref) => {
    const [css] = useStyletron()
    return (
      <div
        className={css({
          flex: '1 1 0%',
          flexWrap: 'wrap',
          display: 'flex',
          alignItems: 'center'
        })}>
        {tags.map((tag, index) => (
          <Tag
            variant={TAG_VARIANT.solid}
            onActionClick={() => removeTag(tag)}
            key={index}>
            {tag}
          </Tag>
        ))}
        <StyledInput ref={ref} {...restProps} />
      </div>
    )
  }
)

export default function Select() {
  const [value, setValue] = React.useState('')
  const [tags, setTags] = React.useState(['hello'])
  const addTag = tag => {
    setTags([...tags, tag])
  }
  const removeTag = tag => {
    setTags(tags.filter(t => t !== tag))
  }
  const handleKeyDown = event => {
    switch (event.keyCode) {
      // Enter
      case 13: {
        if (!value) return
        addTag(value)
        setValue('')
        return
      }
      // Backspace
      case 8: {
        if (value || !tags.length) return
        removeTag(tags[tags.length - 1])
        return
      }
    }
  }
  return (
    <Input
      placeholder={tags.length ? '' : 'Enter A Tag'}
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
      overrides={{
        Input: {
          style: { width: 'auto', flexGrow: 1 },
          component: InputReplacement,
          props: {
            tags: tags,
            removeTag: removeTag,
            onKeyDown: handleKeyDown
          }
        }
      }}
    />
  )
}
