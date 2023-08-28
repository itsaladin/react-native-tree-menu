/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuTree = ({ data, setData }: any) => {
  const [isLebelOneSelected, setIsLebelOneSelected] = useState<number>();
  const [isLebelTwoSelected, setIsLebelTwoSelected] = useState<number>();
  const [isLebelThreeSelected, setIsLebelThreeSelected] = useState<boolean>();
  const [allCheck, setAllCheck] = useState(false);

  const checkAllHandler = () => {
    var finalcheck = false;
    if (allCheck === false) {
      finalcheck = true;
    } else {
      finalcheck = false;
    }
    const datas = [...data];
    datas?.forEach((element) => {
      element.checked = finalcheck;
      element.childrenNodes?.forEach((elemen: any) => {
        elemen.checked = finalcheck;
        elemen.childrenNodes?.forEach((elem: any) => {
          elem.checked = finalcheck;
        });
      });
    });
    setData(datas);
  };

  function toggleCheckFirstLayer(firstIndex: number) {
    const datas = [...data];
    datas[firstIndex]!.checked = !datas[firstIndex]!.checked;

    datas[firstIndex]?.childrenNodes?.forEach((element: any) => {
      if (datas[firstIndex]?.checked) {
        element.checked = true;
        element.childrenNodes?.forEach((elem: any) => {
          elem.checked = true;
          element.childrenNodes?.forEach((ele: any) => {
            ele.checked = true;
          });
        });
      }
      if (!datas[firstIndex]?.checked) {
        element.checked = false;
        element.childrenNodes?.forEach((el: any) => {
          el.checked = false;
          element.childrenNodes?.forEach((ele: any) => {
            ele.checked = false;
          });
        });
      }
    });
    setData(datas);
  }

  function toggleCheckSecondLayer(firstIndex: number, secondIndex: number) {
    const datas: any = [...data];

    datas[firstIndex].childrenNodes[secondIndex].checked =
      !datas[firstIndex].childrenNodes[secondIndex].checked;
    datas[firstIndex]?.childrenNodes?.forEach((element: any, idx: number) => {
      element.childrenNodes?.forEach((elm: any) => {
        if (secondIndex === idx) {
          elm.checked = datas[firstIndex].childrenNodes[secondIndex].checked;
        }
      });
      if (checkActiveStatus(datas[firstIndex]?.childrenNodes) === 1) {
        datas[firstIndex].checked = true;
      } else {
        datas[firstIndex].checked = false;
      }
    });
    setData(datas);
  }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function checkActiveStatus(data: any[]) {
    var a = 0;
    data?.forEach((element: { checked: boolean }) => {
      if (element?.checked === true) {
        a = 1;
      }
    });
    return a;
  }

  function toggleCheckThirdLayer(
    firstIndex: number,
    secondIndex: number,
    thirdIndex: number
  ) {
    const datas: any = [...data];

    datas[firstIndex].childrenNodes[secondIndex].childrenNodes[
      thirdIndex
    ].checked =
      !datas[firstIndex].childrenNodes[secondIndex].childrenNodes[thirdIndex]
        .checked;

    datas[firstIndex].childrenNodes?.forEach((element: any, fidx: number) => {
      if (secondIndex === fidx) {
        if (checkActiveStatus(element.childrenNodes) === 1) {
          datas[firstIndex].childrenNodes[secondIndex].checked = true;
        } else {
          datas[firstIndex].childrenNodes[secondIndex].checked = false;
        }
        if (checkActiveStatus(datas[firstIndex].childrenNodes) === 1) {
          datas[firstIndex].checked = true;
        } else {
          datas[firstIndex].checked = false;
        }
      }
    });

    setData(datas);
  }

  return (
    <>
      <View
        style={{
          width: '60%',
          elevation: 10,
        }}
      >
        {data && data.length > 0 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Icon
              onPress={() => {
                setAllCheck(!allCheck);
                checkAllHandler();
              }}
              name={allCheck ? 'checkbox-outline' : 'checkbox-blank-outline'}
              size={30}
              color={allCheck ? 'green' : 'gray'}
            />
            <Text>Check / Uncheck ALL</Text>
          </View>
        )}

        {data?.map((layerOneItem: any, firstIndex: any) => {
          return (
            <View key={firstIndex}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  onPress={() => toggleCheckFirstLayer(firstIndex)}
                  name={
                    layerOneItem?.checked
                      ? 'checkbox-outline'
                      : 'checkbox-blank-outline'
                  }
                  size={30}
                  color={layerOneItem?.checked ? 'green' : 'gray'}
                />
                <TouchableOpacity
                  onPress={() => {
                    setIsLebelOneSelected(layerOneItem?.id);
                  }}
                >
                  <Text>{layerOneItem?.label}</Text>
                </TouchableOpacity>
              </View>
              {layerOneItem?.childrenNodes &&
                isLebelOneSelected === layerOneItem?.id &&
                layerOneItem?.childrenNodes?.map(
                  (layerTowItem: any, secondIndex: any) => {
                    return (
                      <View key={secondIndex}>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingLeft: '8%',
                          }}
                        >
                          <Icon
                            onPress={() =>
                              toggleCheckSecondLayer(firstIndex, secondIndex)
                            }
                            name={
                              layerTowItem?.checked
                                ? 'checkbox-outline'
                                : 'checkbox-blank-outline'
                            }
                            size={30}
                            color={layerTowItem?.checked ? 'green' : 'gray'}
                          />

                          <TouchableOpacity
                            onPress={() => {
                              setIsLebelTwoSelected(layerTowItem?.id);
                            }}
                          >
                            <Text>{layerTowItem?.label}</Text>
                          </TouchableOpacity>
                        </View>
                        {layerTowItem?.childrenNodes &&
                          isLebelTwoSelected === layerTowItem?.id &&
                          layerTowItem?.childrenNodes?.map(
                            (layerThereeItem: any, thirdIndex: any) => {
                              return (
                                <View
                                  key={thirdIndex}
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingLeft: '16%',
                                  }}
                                >
                                  <Icon
                                    onPress={() =>
                                      toggleCheckThirdLayer(
                                        firstIndex,
                                        secondIndex,
                                        thirdIndex
                                      )
                                    }
                                    name={
                                      layerThereeItem?.checked
                                        ? 'checkbox-outline'
                                        : 'checkbox-blank-outline'
                                    }
                                    size={30}
                                    color={
                                      layerThereeItem?.checked
                                        ? 'green'
                                        : 'gray'
                                    }
                                  />

                                  <TouchableOpacity
                                    onPress={() => {
                                      setIsLebelThreeSelected(
                                        !isLebelThreeSelected
                                      );
                                    }}
                                  >
                                    <Text>{layerThereeItem?.label}</Text>
                                  </TouchableOpacity>
                                </View>
                              );
                            }
                          )}
                      </View>
                    );
                  }
                )}
            </View>
          );
        })}
      </View>
    </>
  );
};

export default MenuTree;
