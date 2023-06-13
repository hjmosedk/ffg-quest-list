import { QuestModel } from '../models/quest.model';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface QuestCardProps {
  quest: QuestModel;
}

const QuestCard = ({ quest }: QuestCardProps) => {
  const QuestColorColor = quest.complete ? '#3CB371' : '';
  const QuestTextColor = quest.complete ? '#006400' : '';
  const StrikeThru = quest.complete ? 'line-through' : 'none';
  return (
    <Card
      sx={{ minWidth: 275, marginTop: 2.5, marginBottom: 2.5 }}
      style={{ backgroundColor: QuestColorColor }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color='text.secondary'
          gutterBottom
          style={{ color: QuestTextColor, textDecoration: StrikeThru }}
        >
          Quest Title
        </Typography>
        <Typography
          variant='h5'
          component='div'
          style={{ color: QuestTextColor, textDecoration: StrikeThru }}
        >
          {quest.title}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color='text.secondary'
          style={{ color: QuestTextColor, textDecoration: StrikeThru }}
        >
          Description
        </Typography>
        <Typography
          variant='body2'
          style={{ color: QuestTextColor, textDecoration: StrikeThru }}
        >
          {quest.description}{' '}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestCard;
