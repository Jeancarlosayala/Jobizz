import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAppliedJobs } from '../Context/applied'
import { getUser } from '../Context/user'
import { useNavigation } from '@react-navigation/native'

import Currency from 'react-currency-formatter'
import Back from '../assets/icons/back_black.png'

const ApplicationsScreen = () => {
  const applied = useSelector(getAppliedJobs)
  const user = useSelector(getUser)
  const navigation = useNavigation()
  
  if (!applied) return <Text>Loading...</Text>

  return (
    <View className='bg-[#FAFAFD]'>
      <SafeAreaView>
        <View className='px-[24px] flex-row items-center justify-between mb-[35px]'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{ height: 24, width: 24, resizeMode: 'contain' }} source={Back} />
          </TouchableOpacity>
          <Text style={style.menuText}>Applications</Text>
          <Image style={[style.userImage, { resizeMode: 'contain' }]} source={user.loggedIn && user.data.image ? { uri: user.data.image } : User} />
        </View>

        <View className='px-[24px] mb-[117px]'>
          <Text style={style.headerText}>You have </Text>
          <Text style={style.headerText}>{applied.length} Applications 👍</Text>
        </View>
      </SafeAreaView>

      <View className='items-center h-[504px]'>
        <FlatList
          data={applied}
          renderItem={(item) => <AplicationItem item={item} />}
        />
      </View>
    </View>
  )
}

const AplicationItem = ({ item }) => {
  const { job_id, status } = item.item;
  const [getJob, setGetJob] = useState(null)

  useEffect(() => {
    fetch(`http://192.168.1.4:4000/api/jobizz/job/${job_id}`)
      .then(res => res.json())
      .then(data => setGetJob(data))
      .catch(err => console.log(err))
  }, [])

  if (!getJob) return <Text>Loading...</Text>
  const mapJobs = getJob.map(item => item)

  const { jobname, image, location, payment, company } = mapJobs[0];

  return (
    <TouchableOpacity className='mb-[20px]'>
      <View className='bg-white w-[327px] h-[140px] justify-center rounded-[10px] px-[10px]'>
        <View className='items-center justify-around flex-row rounded-[20px] mb-[23px]'>
          <View>
            <Image style={style.logo} source={{ uri: image }} />
          </View>
          <View>
            <Text style={style.positionText}>{jobname}</Text>
            <Text style={style.grayText}>{company}</Text>
          </View>
          <View>
            <Text style={style.salaryText}>
              $<Currency quantity={payment} pattern='##,### ' />
            </Text>
            <Text style={style.grayText}>{location}</Text>
          </View>
        </View>

        <View className='px-[14px]'>
          <View style={status === 'Delivered' && style.delivered
            || status === 'Cancelled' && style.cancel
            || status === 'Reviewing' && style.review}>
            <Text style={status === 'Delivered' && style.deliveredText
              || status === 'Cancelled' && style.cancelText
              || status === 'Reviewing' && style.reviewText}>{status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  headerText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 24
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 1000
  },
  logo: {
    height: 44,
    width: 44,
    resizeMode: 'contain'
  },
  positionText: {
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
  },
  grayText: {
    color: '#0D0D26',
    fontSize: 13,
    fontFamily: 'Inter_300Light'
  },
  salaryText: {
    fontSize: 12,
    fontFamily: 'Inter_500Medium'
  },
  delivered: {
    backgroundColor: '#EDF3FC',
    width: 114,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 52
  },
  deliveredText: {
    fontFamily: 'Inter_500Medium',
    color: '#5386E4',
    fontSize: 13
  },
  review: {
    backgroundColor: '#E8FDF2',
    width: 114,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 52
  },
  reviewText: {
    fontFamily: 'Inter_500Medium',
    color: '#0E9D57',
    fontSize: 13
  },
  cancel: {
    backgroundColor: '#FFEDED',
    width: 114,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 52
  },
  cancelText: {
    fontFamily: 'Inter_500Medium',
    color: '#DC312D',
    fontSize: 13
  },
  menuText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16
  }
})

export default ApplicationsScreen