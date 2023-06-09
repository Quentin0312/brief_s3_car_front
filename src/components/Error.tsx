import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

interface ErrorProps {
    message: string;
    isOpen: boolean;
}

const Error: Component<ErrorProps> = (props: ErrorProps) => {
    const [isOpen, setIsOpen] = createSignal(props.isOpen);

    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            {isOpen() && (
                <div class="fixed z-10 inset-0 overflow-y-auto">
                    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            class="fixed inset-0 transition-opacity"
                            aria-hidden="true"
                            onClick={handleClose}
                        >
                            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span
                            class="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        ></span>
                        <div
                            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Erreur
                            </div>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>{props.message}</p>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handleClose}
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsOpen(true)}>Ouvrir la modal</button> */}
        </>
    );

};

export default Error;