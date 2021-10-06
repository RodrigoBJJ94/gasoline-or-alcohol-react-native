import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import ModalStatusBar from './ModalStatusBar';
import ModalTitle from './ModalTitle';
import ModalButton from './ModalButton';
import ModalBanner from './ModalBanner';

export default function ModalMain() {
    const [visible, setVisible] = useState(true);
    return (
        <View>
            <Modal animationType='slide' visible={visible}>
                <View>
                    <ModalStatusBar />
                    <ModalTitle />
                    <ModalButton setVisible={setVisible} />
                    <ModalBanner />
                </View>
            </Modal>
        </View>
    );
};
