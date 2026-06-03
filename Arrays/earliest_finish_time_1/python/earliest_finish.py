from typing import List

def valid_duration(e: int):
    return e 
    

class Solution:
    def earliestFinishTime(self, landStartTime: List[int], landDuration: List[int], waterStartTime: List[int], waterDuration: List[int]):
        min_land_order = float('inf')
        for i in range(len(landStartTime)):
            end = landStartTime[i] + landDuration[i]
            valid_land_d = map(valid_duration, landDuration)
            min_land_order = min(min_land_order, end + min(valid_land_d))
        return []        