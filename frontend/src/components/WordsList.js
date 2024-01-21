import React, { useState, useEffect } from 'react';

const WordsList = (props) => {
    const { words } = props

    return (
        <div>
            <div>
                <div>
                    <WordsItems words={words} />
                </div>
            </div>
        </div>
    )
}

const WordsItems = (props) => {
    const { words } = props
    const [filter, setFilter] = useState('');
    const [visible, setVisible] = useState(false);
    const wordsData = [];

    let contentKb = "";
    let descriptionRu = "";
    let photo = "";

    if (!!words) {
        words.map(w => {
            wordsData.push({
                data: w,
                itemName: w.content_ru.toLowerCase(),

            });
        })
    } else {
        console.log('No entries!');
    }

    return (
        <div className='wrapper'>
            <div className='block-wrapper'>
                <div className='input-wrapper'>
                    <input id="filter"
                        name="filter"
                        type="text"
                        value={filter}
                        placeholder='Введите текст'
                        onChange={event => setFilter(event.target.value)}
                    />
                </div>
                {filter === '' ? (
                    <div className='empty-block'>Информации нет</div>
                ) :
                    <div className='block-info-wrapper'>
                        {wordsData.filter(f => f.itemName.includes(filter) | filter === '').map(w => (
                            <div className='top-wrapper'>
                                <div className={`block-info ${filter ? "" : "none"}`}>
                                    <div className='content-block'><span>Перевод слова:</span>{w.data.content_kb}</div>
                                    <div className='description-block'><span>Описание:</span>{w.data.description_ru}</div>
                                    <div className='img-block'>
                                        <img style={{ width: "300px" }} src={w.data.photo} alt='Картинка' />
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default WordsList