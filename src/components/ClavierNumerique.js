import React, {useState} from 'react';
import { View } from 'react-native';
import CustomButton from './CustomButton';
import CustomButtonDelete from './CustomButtonDelete';
import CustomButtonStepForward from './CustomButtonStepForward';

const ClavierNumerique = ({ navigation, onPressedButtonValue, setOnPressedButtonValue, ftSize, fgColor, setIsConnected}) => {
  
    const [desabledValue, setDesabledValue] = useState(true);

    return (
            <View style={{ marginTop:15, width:'80%'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <CustomButton 
                            text="1" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                    <View style={{width: '34%', alignItems: 'center'}}>
                        <CustomButton text="2" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <CustomButton text="3" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                </View>


                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <CustomButton 
                            text="4" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                    <View style={{width: '34%', alignItems: 'center'}}>
                        <CustomButton 
                            text="5" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <CustomButton 
                            text="6" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                </View>


                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <CustomButton 
                            text="7" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                    <View style={{width: '34%', alignItems: 'center'}}>
                        <CustomButton 
                            text="8" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <CustomButton 
                            text="9" 
                            ftSize={ftSize}
                            fgColor={fgColor}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <CustomButtonDelete 
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue} 
                            setDesabledValue={setDesabledValue}     
                        />
                    </View>
                    <View style={{width: '34%', alignItems: 'center'}}>
                        <CustomButton
                            text="0" 
                            fgColor={fgColor}
                            ftSize={ftSize}
                            onPressedButtonValue={onPressedButtonValue}
                            setOnPressedButtonValue={setOnPressedButtonValue}  
                            desabledValue={desabledValue}
                            setDesabledValue={setDesabledValue}    
                        /> 
                    </View>
                    <View style={{width: '33%', alignItems: 'center'}}>
                        <CustomButtonStepForward 
                            desabledValue={desabledValue}   
                            setIsConnected={setIsConnected} 
                            onPressedButtonValue={onPressedButtonValue} 
                            navigation={navigation}
                        />
                    </View>
                </View>
                


            </View>
      );
}

export default ClavierNumerique;
