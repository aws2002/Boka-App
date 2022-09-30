import {
    View,
    Heading,
    Text,
    HStack,
    VStack,
    Box,
    Alert,
    Radio,
    Input,
    Select,
    Center,
    Image,
  } from "native-base";
  import { SafeAreaView } from "react-native";
  import CustomButton from "../components/customButton";
  import { globalStyles } from "../styles/global";
  import { Entypo, AntDesign } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { ScrollView } from "react-native";
  import { useState } from "react";
  import AccordionList from "../components/Tools/AccordionList";
  import AccordionListServices from "../components/Tools/AccordionListServices";
  export default function CompleteBooking() {
    const [activ, setActiv] = useState(true);
    const [service, setService] = useState("");
    const data2 = [
      {
        id: 0,
        title2: (
          <Text color={"#374151"} fontWeight="600">
            $149.98
          </Text>
        ),
        title: (
          <View>
            <HStack space={2} mt={1}>
              <Text fontSize={14} color={"#111827"} fontWeight={500}>
                Corrective Facial
              </Text>
              <Text color={"#6B7280"} fontWeight={500}>
                (2 Addons)
              </Text>
            </HStack>
            <HStack space={3}>
              <Center>
                <Image
                  size={36}
                  borderRadius={100}
                  source={{
                    uri: "https://www.w3schools.com/css/img_lights.jpg",
                  }}
                  alt="Alternate Text"
                />
              </Center>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text color={"#4B5563"} fontWeight={500}>
                  Kathryn M.
                </Text>
              </View>
            </HStack>
          </View>
        ),
        bodyComponents: (
          <View>
            <View borderTopColor="#F3F4F6" borderTopWidth={2} py={2}>
              <HStack justifyContent={"space-between"}>
                <View backgroundColor="#FFE6D6" px={2} py={1} borderRadius={4}>
                  <Text fontWeight={500}>Add-on</Text>
                </View>
                <View>
                  <Text color={"#111827"} fontWeight={500}>
                    $9.95
                  </Text>
                </View>
              </HStack>
              <HStack space={2}>
                <Text color={"#111827"} fontWeight={500}>
                  Citrust Peel
                </Text>
                <Text color={"#6B7280"}>(10 min)</Text>
              </HStack>
            </View>
            <View borderTopColor="#F3F4F6" borderTopWidth={2} py={2}>
              <HStack justifyContent={"space-between"}>
                <View backgroundColor="#FFE6D6" px={2} py={1} borderRadius={4}>
                  <Text fontWeight={500}>Add-on</Text>
                </View>
                <View>
                  <Text color={"#111827"} fontWeight={500}>
                    $9.95
                  </Text>
                </View>
              </HStack>
              <HStack space={2}>
                <Text color={"#111827"} fontWeight={500}>
                  Citrust Peel
                </Text>
                <Text color={"#6B7280"}>(10 min)</Text>
              </HStack>
            </View>
          </View>
        ),
      },
    ];
    const data = [
      {
        id: 0,
        title: (
          <View>
            <Text fontSize={18} color="#374151">
              Completed services
            </Text>
            <HStack>
              <Text color={"#6B7280"} fontWeight={500}>
                2 Services
              </Text>
              <Entypo name="dot-single" size={24} color="#6B7280" />
              <Text color={"#6B7280"}>3 Addons</Text>
            </HStack>
          </View>
        ),
        bodyComponents: (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <SafeAreaView>
                <View>
                  <AccordionListServices
                    data={data2}
                    customTitle={(item) => <View>{item.title}</View>}
                    customIconText={(item) => <View>{item.title2}</View>}
                    customBody={(item) => (
                      <View mt={3} mb={3}>
                        {item.bodyComponents}
                      </View>
                    )}
                    animationDuration={400}
                  />
                </View>
              </SafeAreaView>
            </View>
          </ScrollView>
        ),
      },
      {
        id: 1,
        title2: (
          <Text color={"#374151"} fontWeight="600">
            $172.7
          </Text>
        ),
        title: (
          <View>
            <HStack>
              <View>
                <Text fontSize={18} color="#374151">
                  Total
                </Text>
              </View>
            </HStack>
          </View>
        ),
        bodyComponents: (
          <View>
            <HStack justifyContent={"space-between"} mb={4}>
              <View>
                <Text color={"#6B7280"}>Services price</Text>
              </View>
              <View>
                <Text color={"#6B7280"}>$157.00</Text>
              </View>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <View>
                <Text color={"#6B7280"}>Boka fee</Text>
              </View>
              <View>
                <Text color={"#6B7280"}>$15.7</Text>
              </View>
            </HStack>
          </View>
        ),
      },
      {
        id: 2,
        title2: <Text color={"#4B5563"}>Change</Text>,
        title: (
          <View>
            <Text fontSize={18} color="#374151">
              Payment method
            </Text>
            <HStack space={3}>
              <Text color={"#6B7280"} fontWeight={500}>
                ****
              </Text>
              <Text color={"#6B7280"}>4322</Text>
            </HStack>
          </View>
        ),
        bodyComponents: <View></View>,
      },
      {
        id: 3,
        title2: <Text color={"#4B5563"}>Apply</Text>,
        title: (
          <View>
            <HStack>
              <View>
                <Text fontSize={18} color="#374151">
                  Discount
                </Text>
              </View>
            </HStack>
          </View>
        ),
        bodyComponents: (
          <View mt={2}>
            <Box>
              <HStack space={3}>
                <Input placeholder="Flat discount" fontSize={16} py={3} w="65%" />
                <Select
                  selectedValue={service}
                  minWidth="30%"
                  py={3}
                  fontSize={16}
                  accessibilityLabel="Choose Service"
                  placeholder="$$"
                  color={"#9CA3AF"}
                  _selectedItem={{
                    bg: "#FF914D",
                    borderRadius: 8,
                    color: "#fff",
                    endIcon: <Entypo name="check" size={24} color="#fff" />,
                  }}
                  onValueChange={(itemValue) => setService(itemValue)}
                >
                  <Select.Item label="UX Research" value="ux" />
                  <Select.Item label="Web Development" value="web" />
                  <Select.Item label="Cross Platform Development" value="cross" />
                  <Select.Item label="UI Designing" value="ui" />
                  <Select.Item label="Backend Development" value="backend" />
                </Select>
              </HStack>
              <HStack justifyContent={"flex-end"} space={6} mt={3} mr={3}>
                <View>
                  <Text color={"#6B7280"} fontWeight={500} fontSize={16}>
                    Cancel
                  </Text>
                </View>
                <View>
                  <Text color={"#FF914D"} fontWeight={500} fontSize={16}>
                    Give discount
                  </Text>
                </View>
              </HStack>
            </Box>
          </View>
        ),
      },
      {
        id: 4,
        title2: <Text color={"#4B5563"}>Apply</Text>,
        title: (
          <HStack justifyContent="space-between" space={2}>
            <View>
              <Text fontSize={18} color="#374151">
                Tips
              </Text>
            </View>
            <View justifyContent={"center"}>
              <MaterialIcons name="info-outline" size={20} color="#6B7280" />
            </View>
          </HStack>
        ),
        bodyComponents: (
          <View>
            {activ && (
              <Alert mb={4} maxW="400" w="100%" bg={"#E9F4FF"} borderRadius={8}>
                <VStack space={1} flexShrink={1} w="100%">
                  <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack flexShrink={1}>
                      <Alert.Icon mt={1} />
                      <Box
                        pl="4"
                        pr={7}
                        _text={{
                          color: "#005CB2",
                          fontSize: 16,
                        }}
                      >
                        The customer can tip from their end after booking is
                        complete. You don’t need to use this option if customer is
                        tipping in cash
                      </Box>
                    </HStack>
                    <View mt={1}>
                      <AntDesign
                        onPress={() => setActiv(false)}
                        name="closecircleo"
                        size={18}
                        color="#005CB2"
                      />
                    </View>
                  </HStack>
                </VStack>
              </Alert>
            )}
  
            <Radio.Group
              defaultValue="5"
              name="exampleGroup"
              accessibilityLabel="favorite colorscheme"
            >
              <Radio colorScheme="warning" size="md" value="1" my={1}>
                <Text color={"#374151"} fontSize="16">
                  10% $17.27
                </Text>
              </Radio>
              <Radio colorScheme="warning" size="md" value="2" my={1}>
                <Text color={"#374151"} fontSize="16">
                  15% $25.9
                </Text>
              </Radio>
              <Radio colorScheme="warning" size="md" value="3" my={1}>
                <Text color={"#374151"} fontSize="16">
                  20% $34.54
                </Text>
              </Radio>
              <Radio colorScheme="warning" size="md" value="4" my={1}>
                <Text color={"#374151"} fontSize="16">
                  25% $43.17
                </Text>
              </Radio>
              <Radio colorScheme="warning" size="md" value="5" my={1}>
                <Text color={"#374151"} fontSize="16">
                  Custom amount
                </Text>
              </Radio>
            </Radio.Group>
            <Box alignItems="center" mt={4}>
              <Input
                mx="3"
                placeholder="$ Fixed tip"
                fontSize={16}
                py={3}
                w="100%"
              />
            </Box>
            <HStack justifyContent={"flex-end"} space={10} mt={3} mr={3}>
              <View>
                <Text fontWeight={500} color={"#6B7280"} fontSize={16}>
                  Cancel
                </Text>
              </View>
              <View>
                <Text fontWeight={500} color={"#FF914D"} fontSize={16}>
                  Apply tip
                </Text>
              </View>
            </HStack>
          </View>
        ),
      },
    ];
  
    return (
         <View flex={1} style={globalStyles.container}>
          <VStack>
            <HStack mt={"10"}>
              <View mt={1}>
                <MaterialIcons
                  name="arrow-back-ios"
                  size={20}
                  color={"#4B5563"}
                />
              </View>
              <Text color={"#4B5563"} fontSize={18}>
                Manage Services
              </Text>
            </HStack>
  
            <Heading mt={"4"}>Complete booking</Heading>
            <View borderBottomColor="#F3F4F6" borderBottomWidth={2} mt={4}></View>
          </VStack>
          <View width={"100%"} mt={5} flex="7">
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <SafeAreaView>
                  <View>
                    <AccordionList
                      data={data}
                      customTitle={(item) => <View>{item.title}</View>}
                      customIconText={(item) => <View>{item.title2}</View>}
                      customBody={(item) => (
                        <View mt={3} mb={3}>
                          <View
                            borderBottomColor="#F3F4F6"
                            borderBottomWidth={2}
                            my={2}
                          ></View>
                          {item.bodyComponents}
                        </View>
                      )}
                      animationDuration={400}
                    />
                  </View>
                </SafeAreaView>
              </View>
            </ScrollView>
          </View>
          <View width={"100%"} flex="1">
            <CustomButton text={"Complete"} />
          </View>
        </View> 

    );
  }
  