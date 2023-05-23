import { QuestModel } from '../models/quest.model';
import questService from '../services/questList.service';
import { useState, useEffect } from 'react';
import QuestCard from './QuestCard';

const QuestList = () => {
  const [questList, setQuestList] = useState<QuestModel[] | []>([]);

  useEffect(() => {
    const getData = async () => {
      const questList = await questService.getAllQuest();
      setQuestList(questList);
    };

    getData();
  });

  return (
    <div>
      {questList &&
        questList.map((quest) => <QuestCard key={quest.id} quest={quest} />)}
      {!questList && <p>Loading ...</p>}
    </div>
  );
};

export default QuestList;
