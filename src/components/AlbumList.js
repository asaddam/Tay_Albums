import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import axios from 'axios';
import Album from './AlbumDetails';
import Card from './Card'

class AlbumList extends React.Component {
    state = { 
        listAlbum: [],
     }

    componentDidMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                console.log(res.data)
                this.setState({ listAlbum: res.data })
            })
    }

    renderListAlbum = () => {
        return this.state.listAlbum.map((item, index) => {
          return (
              <View>
                <Album key={index} album={item} />
              </View>
          )
        })
    }

    render() {
        return (
            <ScrollView>
                {this.renderListAlbum()}
            </ScrollView>
        )
    }
}

export default AlbumList;