import classes from "./Modal.module.css";

interface ModalProps {
  visible: boolean;
  setVisible(visible: boolean): void;
  children?: React.ReactNode;
}

const Modal = ({ visible, setVisible, children }: ModalProps) => {
  const rootClasses = [classes.Modal];
  console.log(rootClasses);

  if (visible) {
    rootClasses.push(classes.active);
  }
  console.log(rootClasses);

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.ModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
