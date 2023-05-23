import { QuestModel } from '../models/quest.model';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface QuestCardProps {
  quest: QuestModel;
}

const QuestCard = ({ quest }: QuestCardProps) => {
  return (
    <Card sx={{ minWidth: 275, marginTop: 2.5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Quest Title
        </Typography>
        <Typography variant='h5' component='div'>
          {quest.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Description
        </Typography>
        <Typography variant='body2'>{quest.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default QuestCard;
