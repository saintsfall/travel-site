import $ from 'jquery';

class Modal{
    constructor(){
        this.openModalBtn = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalBtn = $('.modal__close');
        this.events();
    }

    events(){
        // Clicking the open modal button
        this.openModalBtn.click(this.openModal.bind(this));

        // Clicking the close modal button
        this.closeModalBtn.click(this.closeModal.bind(this));

        // Pressing the any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    openModal(){
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('modal--is-visible');
    }

    keyPressHandler(e){
        if(e.keyCode == 27){
            this.closeModal();
        }
    }
}

export default Modal;