import {
    FormControlLabel,
    Checkbox,
    Box,
    Divider,
    IconButton,
} from '@mui/material';
import { type Item } from '../../types';
import { type ItemCheckBoxListProps } from './types';
import ClearIcon from '@mui/icons-material/Clear';
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const ItemCheckBoxList = ({
    items,
    handleUpdate,
    handleRemove,
}: ItemCheckBoxListProps) => {
    const renderedOutput = items.map((item: Item) => (
        <Box
            key={item.name}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                pb: '0.5em',
            }}
        >
            <FormControlLabel
                sx={{ flexGrow: 1 }}
                control={
                    <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CircleCheckedFilled />}
                        size="medium"
                        sx={{ pt: '0.3em' }}
                        color="secondary"
                        checked={item.isSelected}
                        onChange={() => {
                            handleUpdate(item);
                        }}
                    />
                }
                label={item.name}
            />

            <IconButton
                sx={{}}
                color="inherit"
                onClick={() => {
                    handleRemove(item);
                }}
            >
                <ClearIcon />
            </IconButton>

            <Divider />
        </Box>
    ));
    return renderedOutput;
};

export default ItemCheckBoxList;
