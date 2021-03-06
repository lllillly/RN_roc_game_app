import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  /* 현재 디바이스의 width 값 가져오기 - Dimensions */
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const App = () => {
  const [tab, setTab] = useState(0);

  const _startButtonClickHandler = (value) => {
    setTab(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ingameArea}>
        {tab === 0 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(1)}
          >
            <Text style={styles.startBtnText}>Start Game</Text>
          </TouchableOpacity>
        )}
        {tab === 1 && (
          <View>
            <View style={styles.ingameTop}>
              <Text>머리</Text>
            </View>
            <View style={styles.ingameMiddle}>
              <LinearGradient
                colors={["#353b48", "#7f8fa6"]}
                locations={[0.9, 0.1]}
                style={styles.vsView}
                start={[`left`, `right`]}
              >
                <Text style={styles.vsText}>VS</Text>
              </LinearGradient>
            </View>
            <View style={styles.ingameBottom}>
              <Text>발</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.resultArea}>
        <View style={styles.resultAreaTop}></View>
        <View style={styles.resultAreaBottom}>
          {tab === 1 && (
            <TouchableOpacity
              style={styles.startBtn}
              onPressOut={() => _startButtonClickHandler(0)}
            >
              <Text style={styles.startBtnText}>RESTART!</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

/* 삼항연산자 -> (조건식) ? true일 때 : false일 때 */
/* javascript optional -> (조건식) ? true라면 && ~~~ */
/* 속도는 삼항연산자가 더 빠름 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingameArea: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  resultArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtn: {
    width: CURRENT_WIDTH / 2,
    height: 45,
    backgroundColor: "#2f3640",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  resultAreaTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  resultAreaBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ingameTop: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  ingameMiddle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  ingameBottom: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  vsView: {
    width: CURRENT_WIDTH,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  vsText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default App;
