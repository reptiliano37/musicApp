import React, { JSXElementConstructor, ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator,Text, Image } from "react-native";
import { ImageProps } from "react-native-elements";
import styles from "./addButton.styles";
// import Text from "../text/text";

type ButtonProps = {
    // path:string;
    loading?: boolean;
} & TouchableOpacityProps & ImageProps;

export default function AddButton({ style, loading, ...props }: ButtonProps): ReactElement {

    return (
        
        <TouchableOpacity style={style} disabled={loading} {...props}>
            {loading ? (
                <ActivityIndicator color="white"></ActivityIndicator>
            ) : (
                <Image style={styles.buttonImage} {...props}/>
            )}
        </TouchableOpacity>
    );
}