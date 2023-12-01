import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { URL_USER_HIRED } from '../utils/backend-links';
import axios from 'axios';
import { notify } from '../utils/Notify';
import  { Fragment, PropsWithChildren, } from 'react';
import { Button } from '@mui/material';

export interface Props {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const DialogHiredAlert=(props: PropsWithChildren<Props>) => {

    const handleUserHired = async() => {
        try {
            const res = await axios.get(URL_USER_HIRED);
            if (res.status === 200) {
                notify(res.data);
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                notify(error.response.data.message); // Wyświetlenie wiadomości o błędzie
            } else {
                notify("Wystąpił problem podczas oznaczenia użytkownika jako zatrudniony.");
            }
        }
    }

    
      const handleClose = () => {
        props.setOpen(false);
      };

      return(
        <Fragment>
        <Dialog
        open={props.isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Czy kontynuować?"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Po  kliknięciu opcji "zatwierdź" utracisz dostęp do platformy.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Anuluj</Button>
            <Button onClick={handleUserHired} autoFocus>
            Zatwierdź
            </Button>
        </DialogActions>
    </Dialog>


    </Fragment>
      );

}
export default DialogHiredAlert;