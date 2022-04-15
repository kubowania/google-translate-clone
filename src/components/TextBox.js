import SelectDropDown from './SelectDropDown'

const TextBox = ({
  style,
  setShowModal,
  selectedLanguage,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
}) => {

  const handleClick = () => {
    setTextToTranslate('')
    setTranslatedText('')
  }
  return (
    <div className={style}>
      <SelectDropDown
        style={style}
        setShowModal={setShowModal}
        selectedLanguage={selectedLanguage}
      />
      <textarea
        disabled={style === 'output'}
        className={style}
        placeholder={style == 'input' ? 'Enter text' : 'Translation'}
        onChange={(e) => setTextToTranslate(e.target.value)}
        value={style === 'input' ? textToTranslate : translatedText}
      />
      {style === 'input' && (
        <div className="delete" onClick={handleClick}>
          ˟
        </div>
      )}
    </div>
  )
}

export default TextBox
